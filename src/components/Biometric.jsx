import React from "react";

const Biometric = () => {
  const createCredential = async () => {
    try {
      const userId = "uniqueUserId123"; // Replace with user ID logic

      const dummyChallenge = new Uint8Array([0x01, 0x02, 0x03, 0x04]); // Dummy challenge data

      const publicKeyCredential = await navigator.credentials.create({
        publicKey: {
          challenge: dummyChallenge,
          rp: {
            name: "React App",
            id: "priyanshu-pwa-demo.netlify.app",
          },
          user: {
            id: new Uint8Array([userId]),
            name: "user@example.com",
            displayName: "User Name",
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 }, // ES256
            { type: "public-key", alg: -257 }, // RS256
            // Add other supported algorithms as needed
          ],
          authenticatorSelection: { authenticatorAttachment: "platform" },
          timeout: 60000,
          attestation: "direct",
        },
      });

      localStorage.setItem("publicKey", JSON.stringify(publicKeyCredential));
      console.log("Credential created:", publicKeyCredential);
      // Store publicKeyCredential in localStorage or client-side storage
    } catch (error) {
      console.error("Error creating credential:", error);
    }
  };

  const verifyCredential = async () => {
    try {
      const dummyChallenge = new Uint8Array([0x01, 0x02, 0x03, 0x04]); // Dummy challenge data

      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: dummyChallenge,
          allowCredentials: [
            {
              type: "public-key",
              id: new Uint8Array([
                /* stored credential ID */
              ]),
            },
          ],
          timeout: 60000,
        },
      });

      console.log("Credential verified:", credential);
    } catch (error) {
      console.error("Error verifying credential:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 p-5">
      <button onClick={createCredential}>Create Credential</button>
      <button onClick={verifyCredential}>Verify Credential</button>
    </div>
  );
};

export default Biometric;
