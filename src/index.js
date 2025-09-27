import "./styles.css";
import { AddTaskListener } from "./components/createnote";
import {
  ShowMainContent,
  AddSectionListener,
  MainContentListener,
  HighlightSection
} from "./components/notesection";

export const globalState = {
  sections: {
    main: [],
  },
  activeSection: null,
};

document.addEventListener("DOMContentLoaded", () => {
  ShowMainContent();
  HighlightSection()
  MainContentListener();
  AddTaskListener();
  AddSectionListener();
});
