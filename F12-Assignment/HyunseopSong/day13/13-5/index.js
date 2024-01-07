import DaumPostcodeEmbed from "react-daum-postcode";

export default function AddresLibrary() {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
  };
  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </>
  );
}
