export default function ImagePreloadMovedPage(): JSX.Element {
  // 이후 자동적으로 페이지로 넘어온 이후, 기존에 src로 다운받은 똑같은 이미지가 있는지
  // 메모리 내에서 체크 후 있다면 해당 이미지를 자동으로 불러옴
  return (
    <>
      <img src="용량디따큰배너이미지" />
    </>
  );
}
