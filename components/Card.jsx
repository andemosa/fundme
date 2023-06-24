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
  milestoneIndex,
  milestoneHash,
  milestoneCID,
  validated,
  votes,
  requestLoading,
  setRequestLoading,
  campaignId,
  campaignOwner,
  hasPledged,
  canUploadProof,
  openUploadModal,
  openValidateModal,
  setSelectedMilestone,
  setSelectedImage,
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

  const onClickValidate = () => {
    openValidateModal();
    setSelectedMilestone(milestoneHash);
    setSelectedImage(milestoneCID);
  };

  const validCID =
    milestoneCID !==
    "";

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {milestoneDetails}
      </h5>
      <div className="flex justify-between gap-1">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {/* Goal: {ethers.utils.formatEther(goal)} */}
          Goal: {goal}
        </p>
        <p className="font-bold text-gray-900 dark:text-white">
          Votes: {votes}
        </p>
      </div>

      <div className="flex items-center justify-between">
        {campaignOwner !== address && hasPledged && validCID && (
          <button
            className="bg-[#3C4A79] px-4 py-2 rounded-lg text-white text-xs md:text-base text-center"
            onClick={onClickValidate}
          >
            {requestLoading ? (
              <Spinner aria-label="Submitting form" size="sm" />
            ) : (
              "Validate Proof"
            )}
          </button>
        )}
        {campaignOwner === address && (
          <>
            {milestoneIndex === 1 ? (
              <>
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
              </>
            ) : validated ? (
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
            ) : null}
          </>
        )}
      </div>
    </Card>
  );
};

export default MilestoneCard;
