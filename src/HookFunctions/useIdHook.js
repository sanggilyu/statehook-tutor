import { useId } from 'react';

export default function UseIdHook() {
  const id = useId();

  return (
    <div style={{backgroundColor:"green", padding:"5px" }}>
aaa
    </div>
  );
}