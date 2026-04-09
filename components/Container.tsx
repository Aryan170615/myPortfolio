type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full flex justify-center bg-black text-white">
      <div className="w-full max-w-4xl border-l border-r border-neutral-800">
        {children}
      </div>
    </div>
  );
};

export default Container;