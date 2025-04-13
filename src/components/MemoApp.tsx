import { AddMemo } from "./AddMemo"
import { MemoContent } from "./MemoContent"

export const MemoApp = () => {
  return (
    <div className="memoApp">
      <AddMemo />
      <MemoContent />
    </div>
  );
};