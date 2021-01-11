import React from "react";

import NetworkDaoList from "../components/NetworkDaoList";

import { useLocalUserData } from "../contexts/UserContext";
import { useInjectedProvider } from "../contexts/InjectedProviderContext";

const NetworkList = () => {
  const { userHubDaos } = useLocalUserData();
  const {
    injectedProvider: { provider },
  } = useInjectedProvider();

  const currentNetwork = userHubDaos.find(
    (dao) => dao.networkID === provider.chainId
  );
  const otherNetworks = userHubDaos.filter(
    (dao) => dao.networkID !== provider.chainId
  );

  return (
    <div>
      {currentNetwork && (
        <>
          <h1 className="network-header">Current Network: </h1>
          <p className="label">{currentNetwork.name}</p>
          <NetworkDaoList
            data={currentNetwork.data}
            networkID={currentNetwork.networkID}
          />
        </>
      )}
      {otherNetworks.length > 0 && (
        <>
          <h3 className="network-header">Other Networks: </h3>
          {otherNetworks.map((network) => {
            if (network.data.membersHub.length) {
              return (
                <div key={network.networkID}>
                  <p className="label">{network.name}</p>
                  <NetworkDaoList
                    data={network.data}
                    networkID={network.networkID}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </>
      )}
    </div>
  );
};

export default NetworkList;
