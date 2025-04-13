import { MemoHeader } from "./MemoHeader"
import { MemoText } from "./MemoText"

export const MemoContent = () => {
  return (
    <div className="memoContent">
      <MemoHeader />
      <MemoText />
    </div>
  );
};