import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <>
      <div style={{ width: "500px" }}>
        {new Array(10).fill(1).map((el) => (
          <LazyLoad height={500}>
            <img src="/IU2.png" style={{ width: "500px", height: "500px" }} />
          </LazyLoad>
        ))}
      </div>
    </>
  );
}
