
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

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeHeaderStyle(memo.id, { fontSize: e.target.value });
  };

  const fontSizeOptions = [];
  for (let i = 8; i <= 40; i += 8) {
    fontSizeOptions.push(
      <option key={i} value={`${i}px`}>
        {i}px
      </option>
    );
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
            B
          </button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'left' })}>⬅️</button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'center' })}>↔️</button>
          <button onClick={() => onChangeHeaderStyle(memo.id, { textAlign: 'right' })}>➡️</button>
          <select
          value={memo.headerStyle.fontSize}
          onChange={handleFontSizeChange}
        >
          {fontSizeOptions}
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