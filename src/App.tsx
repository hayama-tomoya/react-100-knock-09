
import { Memo } from "./type";
import { MemoApp } from "./components/MemoApp";
import "./styles.css";
import { useState } from "react";

export const App = () => {

  const [memos, setMemos] =useState<Memo[]>([]);
  const [selectedMemoId, setSelectedMemoId] = useState<number | null>(null);

  const handleSelectedMemo = (id: number) => {
    setSelectedMemoId(id);
  };

  const handleEditMemo = (id: number, newContent: string) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, content: newContent } : memo
      )
    );
  };

  const handleEditMemoTitle = (id: number, newTitle: string) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, text: newTitle } : memo
      )
    );
  };

  const handleDeleteMemo = (id: number) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  
    if (selectedMemoId === id) {
      setSelectedMemoId(null);
    }
  };

  const handleChangeContentStyle = (
    id: number,
    newStyle: Partial<Memo['contentStyle']>
  ) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id
          ? { ...memo, contentStyle: { ...memo.contentStyle, ...newStyle } }
          : memo
      )
    );
  };

  const handleTextSelection = (id: number) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return; 

    const selectedText = selection.toString();
    const style = memos.find((memo) => memo.id === id)?.contentStyle;

    if (selectedText && style) {
      const newContent = applyStyleToSelectedText(selectedText, style);
      handleEditMemo(id, newContent);
    }
  };

  const applyStyleToSelectedText = (
    selectedText: string,
    style: Memo['contentStyle']
  ) => {
    const styledText = `<span style="font-weight:${style.fontWeight}; font-size:${style.fontSize}; text-align:${style.textAlign};">${selectedText}</span>`;
    return styledText;
  };

  

  const onAddMemo = () => {
    const newMemo: Memo = {
      id: memos.length,
      text: `MEMO${memos.length + 1}`,
      content: '',
      contentStyle: {
        fontWeight: 'normal',
        fontSize: '16px',
        textAlign: 'left',
      }
    };
      setMemos([...memos, newMemo]);
    }

  return (
    <div>
      <MemoApp 
      memos={memos}
      selectedMemoId={selectedMemoId}
      onSelectedMemo={handleSelectedMemo}
      onAddMemo={onAddMemo}
      onEditMemo={handleEditMemo}
      onEditMemoTitle={handleEditMemoTitle}
      onDeleteMemo={handleDeleteMemo}
      onChangeContentStyle={handleChangeContentStyle}
      onTextSelection={handleTextSelection}
      />
    </div>

  );
};