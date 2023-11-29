import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import styles from "~/styles/note-details.css";
import { getStoredNotes } from "~/data/notes";

export default function NoteDetailsPage() {
  const note: Note = useLoaderData();
  return (
    <main id="note-details">
      <header>
        <nav>
          <Link to="/notes">Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
        <p id="note-details-content">{note.content}</p>
      </header>
    </main>
  );
}
export interface Note {
  id: string;
  title: string;
  content: string;
}
export async function loader({ params }: LoaderFunctionArgs) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note: Note) => note.id === noteId);
  return selectedNote;
}

export const links: LinksFunction = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];
