import { redirect, type MetaFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import { getStoredNotes, storedNotes } from "~/data/notes";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks, Note } from "~/components/NoteList";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function NotesPage() {
  const notes: Note[] = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  //TODO: Add validation...
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storedNotes(updatedNotes);
  return redirect("/notes");
}

export const links: LinksFunction = () => [
  ...[...newNoteLinks(), ...noteListLinks()],
];
