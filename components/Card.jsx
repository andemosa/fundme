import { Card } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";

import { useWalletContext } from "@/context/walletContext";
import { abi, contractAddress } from "@/utils/contract";
import { formatError } from "@/utils/helpers";

const MilestoneCard = ({
  goal,
  milestoneDetails,
  milestoneHash,
  milestoneCID,
  validated,
  votes,
  requestLoading,
  setRequestLoading,
  campaignId,
  campaignOwner,
  canUploadProof,
  openUploadModal,
  setSelectedMilestone,
}) => {
  const { signer, address, provider } = useWalletContext();
  const dispatch = useNotification();

  const handleNewNotification = (type, message) => {
    dispatch({
      type,
      message,
      title: "Transaction Notification",
      position: "topR",
      icon: "bell",
    });
  };

  const handleValidate = async (e) => {
    e.preventDefault();
    setRequestLoading(true);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const res = await contract.validateMilestone(milestoneHash, milestoneCID);
      await provider.waitForTransaction(res.hash, 1, 150000);
      handleNewNotification("info", "Validate successful");
    } catch (error) {
      handleNewNotification("error", formatError(error.message));
    }
    setRequestLoading(false);
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setRequestLoading(true);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const res = await contract.withdraw(campaignId, milestoneHash);
      await provider.waitForTransaction(res.hash, 1, 150000);
      handleNewNotification("info", "Withdraw Successful");
    } catch (error) {
      handleNewNotification("error", formatError(error.message));
    }
    setRequestLoading(false);
  };

  const onClickUpload = () => {
    openUploadModal();
    setSelectedMilestone(milestoneHash);
  };

  const validCID =
    milestoneCID !==
    "0x0000000000000000000000000000000000000000000000000000000000000000";

  return (
    <Card
      imgAlt={validCID ? "/images/products/apple-watch.png" : null}
      imgSrc={validCID ? "/images/products/apple-watch.png" : null}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {milestoneDetails}
      </h5>
      <div className="flex justify-between gap-1">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Goal: {goal}
        </p>
        <p className="font-bold text-gray-900 dark:text-white">
          Votes: {votes}
        </p>
      </div>

      <div className="flex items-center justify-between">
        {campaignOwner !== address && validCID && (
          <button
            className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white text-xs md:text-base text-center"
            onClick={handleValidate}
          >
            {requestLoading ? (
              <Spinner aria-label="Submitting form" size="sm" />
            ) : (
              "Validate Proof"
            )}
          </button>
        )}
        {campaignOwner === address &&
          (validated ? (
            <button
              className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white text-xs md:text-base text-center"
              onClick={handleWithdraw}
            >
              {requestLoading ? (
                <Spinner aria-label="Submitting form" size="sm" />
              ) : (
                "Withdraw"
              )}
            </button>
          ) : canUploadProof ? (
            <button
              className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white text-xs md:text-base text-center"
              onClick={onClickUpload}
            >
              {requestLoading ? (
                <Spinner aria-label="Submitting form" size="sm" />
              ) : (
                "Upload Proof"
              )}
            </button>
          ) : null)}
      </div>
    </Card>
  );
};

export default MilestoneCard;
