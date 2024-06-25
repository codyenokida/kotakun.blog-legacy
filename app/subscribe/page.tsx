"use client";

import { useState } from "react";

import TextInput from "@/components/TextInput";

import styles from "./page.module.scss";
import { addToEmaiList } from "@/lib/firebase/firestore";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [complete, setComplete] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      await addToEmaiList(name, email);
      setComplete(true);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Subscribe</h2>
      <p>
        I post bi-monthly updates for this blog! Feel free to sign yourself up
        using the form below c:
      </p>
      <div className={styles.inputs}>
        <TextInput
          value={name}
          setValue={setName}
          labelText="Name"
          placeholder="mr. filby yeh"
        />
        <TextInput
          value={email}
          setValue={setEmail}
          labelText="Email"
          placeholder="filby_hollandyap@hay.com"
        />
        <button
          className={styles.button}
          disabled={loading || !(name && email) || complete}
          onClick={handleSubscribe}
        >
          {complete ? "Subscribed! 🎉" : "Subscribe!"}
        </button>
      </div>
      {complete && (
        <p>
          Thank you for following along c: It means a lot you even came on this
          website!
        </p>
      )}
    </>
  );
}
