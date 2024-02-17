import { useId } from 'react';

export default function UseIdHook() {
  const id = useId();

  return (
    <div style={{backgroundColor:"green", padding:"5px" }}>
      <label htmlFor={`${id}-name`}>이름</label>
      <input id={`${id}-name`} />
      <br />
      <label htmlFor={`${id}-age`}>나이</label>
      <input id={`${id}-age`} />
    </div>
  );
}