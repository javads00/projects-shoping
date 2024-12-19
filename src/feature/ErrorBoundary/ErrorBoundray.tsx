import { useNavigate } from "react-router-dom";

export const ErrorBoundary = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">صفحه مورد نظر یافت نشد</h1>
        <p className="mb-8 text-lg">
          ببخشید، صفحه‌ای که دنبال آن هستید یافت نشد. لطفاً یکی از صفحات دیگر را
          امتحان کنید.
        </p>
        <button
          onClick={handleGoHome}
          className="rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-blue-600"
        >
          بازگشت به خانه
        </button>
      </div>
    </div>
  );
};
