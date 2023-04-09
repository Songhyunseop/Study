export const checkValidationFile = (file?: File): boolean => {
  // file?  => file이 있을 수도 있고 없을 수도 있을 때
  if (typeof file === "undefined") {
    alert("파일이 없음");
    return false;
  }

  if (file?.size > 5 * 1024 * 1024) {
    alert("파일용량 큼 (5MB 밑으로 올려라)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 나 png만 넣으라고");
    return false;
  }

  return true;
};
