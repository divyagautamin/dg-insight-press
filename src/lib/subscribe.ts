import { CONTACT } from "@/lib/links";
import { showComingSoon } from "@/components/ui/SmartLink";

// ==========================================================================
// Newsletter subscribe
// There is no mailing-list service connected yet, so the Subscribe buttons
// open the visitor's email app with a ready-made request addressed to the
// official email. When a newsletter service (e.g. Mailchimp, Buttondown,
// ConvertKit) is set up later, only this one function needs to change.
// ==========================================================================

export function subscribe(email: string | undefined | null) {
  const value = (email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    showComingSoon("Please enter a valid email address.");
    return false;
  }
  const subject = "Newsletter subscription";
  const body = `Please add this email address to the DG Insight Press newsletter:\n\n${value}`;
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showComingSoon("Opening your email app to confirm…");
  return true;
}
