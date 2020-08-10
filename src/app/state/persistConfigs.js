import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import storageSession from "redux-persist/lib/storage/session";

export const rootPersistConfig = {
  key: "root",
  storage: storageSession,
  stateReconciler: hardSet
};
