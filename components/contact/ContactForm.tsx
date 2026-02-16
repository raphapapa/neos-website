"use client";

import { useState } from "react";
import { submitContact } from "@/lib/api/contact";
import type { ContactForm as ContactFormType } from "@/lib/types";

export default function ContactForm() {
  const [formType, setFormType] = useState<"JOIN" | "GENERAL">("JOIN");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const fd = new FormData(e.currentTarget);
    const data: ContactFormType = {
      name: fd.get("name") as string,
      email: (fd.get("email") as string) || undefined,
      type: formType,
    };

    if (formType === "JOIN") {
      const age = fd.get("age") as string;
      data.age = age ? Number(age) : undefined;
      data.epic_id = (fd.get("epic_id") as string) || undefined;
      data.motivation = (fd.get("motivation") as string) || undefined;
      data.play_history = (fd.get("play_history") as string) || undefined;
      data.parent_name = (fd.get("parent_name") as string) || undefined;
      data.parent_contact = (fd.get("parent_contact") as string) || undefined;
    }

    const res = await submitContact(data);
    setResult(res);
    setIsSubmitting(false);

    if (res.success) {
      (e.target as HTMLFormElement).reset();
    }
  }

  const inputClass =
    "w-full bg-neos-gray-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neos-gray/50 focus:outline-none focus:border-neos-red/50 transition-colors";

  return (
    <div>
      {/* Type selector */}
      <div className="flex gap-3 mb-8">
        <button
          type="button"
          onClick={() => setFormType("JOIN")}
          className={`px-5 py-2.5 rounded-full text-sm transition-all ${
            formType === "JOIN"
              ? "bg-neos-red text-white"
              : "bg-white/5 text-neos-gray hover:bg-white/10"
          }`}
        >
          入隊希望
        </button>
        <button
          type="button"
          onClick={() => setFormType("GENERAL")}
          className={`px-5 py-2.5 rounded-full text-sm transition-all ${
            formType === "GENERAL"
              ? "bg-neos-red text-white"
              : "bg-white/5 text-neos-gray hover:bg-white/10"
          }`}
        >
          一般お問い合わせ
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-neos-gray mb-1.5">
            氏名 <span className="text-neos-red">*</span>
          </label>
          <input
            name="name"
            required
            maxLength={100}
            placeholder="名前を入力"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-neos-gray mb-1.5">メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email@example.com"
            className={inputClass}
          />
        </div>

        {formType === "JOIN" && (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neos-gray mb-1.5">年齢</label>
                <input
                  name="age"
                  type="number"
                  min={1}
                  max={99}
                  placeholder="16"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-neos-gray mb-1.5">Epic Games ID</label>
                <input
                  name="epic_id"
                  placeholder="EpicAccountName"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neos-gray mb-1.5">プレイ歴</label>
              <input
                name="play_history"
                placeholder="例: フォートナイト歴3年"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-neos-gray mb-1.5">志望動機</label>
              <textarea
                name="motivation"
                rows={4}
                placeholder="NEOSに入りたい理由を教えてください"
                className={inputClass}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neos-gray mb-1.5">
                  保護者氏名（未成年の場合）
                </label>
                <input name="parent_name" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-neos-gray mb-1.5">
                  保護者連絡先
                </label>
                <input name="parent_contact" className={inputClass} />
              </div>
            </div>
          </>
        )}

        {formType === "GENERAL" && (
          <div>
            <label className="block text-sm text-neos-gray mb-1.5">お問い合わせ内容</label>
            <textarea
              name="motivation"
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className={inputClass}
            />
          </div>
        )}

        {result?.success && (
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 text-emerald-300 text-sm">
            送信が完了しました。ありがとうございます。
          </div>
        )}
        {result?.error && (
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 text-red-300 text-sm">
            {result.error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-neos-red hover:bg-neos-red-bright disabled:opacity-50 text-white font-bold py-3.5 rounded-lg transition-colors"
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </button>
      </form>
    </div>
  );
}
