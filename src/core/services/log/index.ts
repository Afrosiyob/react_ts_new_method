import { configs } from "core/configs";

export function log(info: unknown): void {
  if (configs.app.appIsDev) {
    // eslint-disable-next-line no-console
    console.log(info);
  }
}
