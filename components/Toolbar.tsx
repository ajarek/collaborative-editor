"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OPEN_FLOATING_COMPOSER_COMMAND } from "@liveblocks/react-lexical";
import { Button } from "./ui/button";

export function Toolbar() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="toolbar">
      <Button
        className="text-white"
        onClick={() =>
          editor.dispatchCommand(OPEN_FLOATING_COMPOSER_COMMAND, undefined)
        }
      >
        💬 New comment
      </Button>
    </div>
  );
}