export async function runAI(prompt) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "My AI App"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response";

  } catch (err) {
    console.error(err);
    return "Error generating content";
  }
}
