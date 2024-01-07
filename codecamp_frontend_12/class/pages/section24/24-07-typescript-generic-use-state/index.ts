export function useState<T>(초기값: T): [T, (변경값: T) => void] {
  const state = 초기값;

  const setState = (변경값: T): void => {
    console.log(`${String(state)}에서 ${String(변경값)}으로 값을 변경`); // 1. state 변경
    console.log(`변경된 ${String(변경값)}을 사용해서 컴포넌트를 리렌더링 함`); // 2. 해당 컴포넌트 리렌더링
  };

  return [state, setState];
}

// generic 타입은 [함수 제공자 입장]에서 많이 사용 (사용자들이 함수에 어떤 값을 넣어 사용할지 추론하기가 어렵)
//
// * any로 타입을 지정하자니 너무 불안정하기 때문에 generic 타입을 사용해서 그때그때 입력하는 값에 맞게 타입을 지정하도록 함
