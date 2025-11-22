const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between bg-red-800 text-white font-serif px-5 py-5 border-t border-white/60">
      <p>Copyrights @ ACLC College of Ormoc, INC.</p>
      <p className="font-sans">@ {year}</p>
    </div>
  );
};

export default Copyright;
