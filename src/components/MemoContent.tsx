
import { Memo } from "../type";

type MemoContentProps = {
  memo: Memo | undefined;
  onEditMemo: (id: number, newContent: string) => void;
  onEditMemoTitle: (id: number, newText: string) => void;
  // onEditMemoContent: (id: number, newContent: string) => void;
  onChangeHeaderStyle: (id: number, newStyle: Partial<Memo['headerStyle']>) => void;
};

export const MemoContent = ({ memo, onEditMemo, onEditMemoTitle, onChangeHeaderStyle }: MemoContentProps) => {
  if (!memo) {
    return (
      <div className="memoContentUndifined">
        メモを選択してください
      </div>
    );
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onEditMemo(memo.id, e.target.value);
  }

  return (
    <div className="memoContent">
      <input
        className="memoTitle"
        value={memo.text}
        onChange={(e) => onEditMemoTitle(memo.id, e.target.value)}
      />
      <div 
      className="memoHeader"
      style={{
        fontWeight: memo.headerStyle.fontWeight,
        fontSize: memo.headerStyle.fontSize,
        textAlign: memo.headerStyle.textAlign,
      }}
      >
        <div className="memoHeaderControls">
          <button onClick={() => onChangeHeaderStyle(memo.id, { fontWeight: memo.headerStyle.fontWeight === 'bold' ? 'normal' : 'bold' })}>
            Bold
          </button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'left' })}>左</button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'center' })}>中</button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'right' })}>右</button>
          <select
            value={memo.headerStyle.fontSize}
            onChange={(e) => onChangeHeaderStyle(memo.id, { fontSize: e.target.value })}
          >
            <option value="16px">小</option>
            <option value="24px">中</option>
            <option value="32px">大</option>
          </select>
        </div>
      </div>
      <textarea
        value={memo.content}
        onChange={onChangeText}
        className="memoText"
      />
    </div>
  );
};