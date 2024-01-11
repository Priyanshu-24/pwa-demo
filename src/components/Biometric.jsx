import React, { useState } from "react";

const dummyChallenge = new Uint8Array([0x01, 0x02, 0x03, 0x04]); // Dummy challenge data
const Biometric = () => {
  const [cred, setCred] = useState({});

  const createCredential = async () => {
    try {
      const userId = "uniqueUserId123"; // Replace with user ID logic

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

      localStorage.setItem("publicKey", publicKeyCredential.id);
      console.log("Credential created:", publicKeyCredential);
      alert("Credentials created");
      setCred(publicKeyCredential);
      // Store publicKeyCredential in localStorage or client-side storage
    } catch (error) {
      console.error("Error creating credential:", error);
    }
  };

  const verifyCredential = async () => {
    try {
      if (!cred) {
        console.error("No stored credential found");
        return;
      }

      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: dummyChallenge,
          allowCredentials: [
            {
              type: "public-key",
              id: cred.rawId,
              transports: ["internal"], // Use transports as needed
            },
          ],
          timeout: 60000,
        },
      });

      console.log("Credential verified:", credential);
      alert("Credentials Verified");
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
