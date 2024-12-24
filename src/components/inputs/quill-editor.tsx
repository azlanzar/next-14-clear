import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the default Quill theme

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  onChange,
  placeholder = "Start typing...",
}) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ "code-block": true }],
      ["link"],
      ["clean"], // Removes formatting
    ],
  };

  const handleChange = (content: string) => {
    onChange(content);
  };

  return (
    <div className="quill-editor min-h-52 h-60">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        className="h-full min-h-52"
      />
    </div>
  );
};

export default QuillEditor;
