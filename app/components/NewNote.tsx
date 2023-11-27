import React from "react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./NewNote.css";

interface NewNoteProps {}

const NewNote: React.FC<NewNoteProps> = () => {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
};

export default NewNote;

export const links: LinksFunction = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];
