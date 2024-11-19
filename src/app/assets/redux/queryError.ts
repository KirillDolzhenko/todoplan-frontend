export function RTKErrorMessage(error: unknown) {
  if (
    error instanceof Object &&
    "data" in error &&
    (error as any).data instanceof Object &&
    "message" in (error as any).data &&
    typeof (error as any).data.message == "string"
  ) {
    return (error as any).data.message;
  }
  return "Something went wrong!";
}
