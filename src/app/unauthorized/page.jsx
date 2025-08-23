// src/app/unauthorized/page.js
export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
      <p>You don’t have permission to view this page.</p>
    </div>
  );
}
