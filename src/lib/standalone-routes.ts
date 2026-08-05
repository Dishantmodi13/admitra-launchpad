/** Routes that open in a new tab with no site navbar/footer */
export const STANDALONE_ROUTES = ["/enquiry", "/login", "/register"] as const;

export type StandaloneRoute = (typeof STANDALONE_ROUTES)[number];

export function opensInNewTab(path: string) {
  return STANDALONE_ROUTES.includes(path as StandaloneRoute);
}

export const newTabLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function linkPropsForRoute(path: string) {
  return opensInNewTab(path) ? newTabLinkProps : {};
}
