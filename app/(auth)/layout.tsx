const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-auth bg-contain">
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="bg-white h-96 flex flex-col items-center justify-center rounded-lg px-12 gap-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
