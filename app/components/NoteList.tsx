import React from "react";
import styles from "./NoteList.css";
import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export interface Note {
  id: string;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps): JSX.Element {
  return (
    <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id} className="note">
          <Link to={"/" + note.id}>
            <article>
              <header>
                <ul className="note-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{note.title}</h2>
              </header>
              <p>{note.content}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;

export const links: LinksFunction = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];
