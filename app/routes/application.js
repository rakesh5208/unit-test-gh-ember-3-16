import Route from "@ember/routing/route";
const LINT_ERROR = "";
export default class ApplicationRoute extends Route {
    beforeModel() {
        console.log("Should show the lint error");
    }
}
