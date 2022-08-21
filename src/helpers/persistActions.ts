import { createSignal } from 'solid-js';

type ActionsType = {
  [key: string]: Function;
};

export const [actionsState, setActionsState] =
  createSignal<null | ActionsType>(null);

export function persistActions(actions: Function[]): void {
  const changedActions = actions
    .map((action) => ({
      [String(action)]: action,
    }))
    .reduce((acc, next) => ({ ...acc, ...next }), {});

  if (actionsState() !== null) {
    setActionsState((prev) => ({ ...prev, ...changedActions }));
  } else {
    setActionsState(changedActions);
  }
}
