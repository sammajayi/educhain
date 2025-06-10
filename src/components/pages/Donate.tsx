const ethWallet = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with your real wallet

const Donate = () => (
  <div className="max-w-xl mx-auto py-12 px-4 mt-20">
    <h1 className="text-3xl font-bold mb-4 text-center">Support Educhain</h1>
    <p className="mb-6 text-lg text-gray-700 text-center">
      Your donation helps us empower more students with blockchain education and expand our outreach programs.
    </p>
    <div className="bg-indigo-50 rounded-lg p-6 shadow text-center">
      <h2 className="text-xl font-semibold mb-2">Donate with Ethereum</h2>
      <div className="mb-2">
        <span className="font-mono text-indigo-700 break-all">{ethWallet}</span>
      </div>
      <button
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        onClick={() => navigator.clipboard.writeText(ethWallet)}
      >
        Copy Wallet Address
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Send ETH to the address above. Thank you for your support!
      </p>
    </div>
  </div>
); 

export default Donate;