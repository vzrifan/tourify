import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-auth bg-contain">
      {children}
    </div>
  );
};

export default AuthLayout;
