import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/App.tsx
function n() {
	return /* @__PURE__ */ e("div", {
		className: "min-h-screen bg-background text-foreground flex items-center justify-center",
		children: /* @__PURE__ */ t("div", {
			className: "text-center space-y-3",
			children: [/* @__PURE__ */ e("h1", {
				className: "text-2xl font-bold text-primary",
				children: "Xcamp App"
			}), /* @__PURE__ */ e("p", {
				className: "text-muted-foreground text-sm",
				children: "Design system ready. Start building."
			})]
		})
	});
}
//#endregion
//#region src/skin/types.ts
var r = {
	paradigm: "platform",
	tone: "scientific",
	aiPersona: "analyst"
}, i = {
	bg: "#fff8f0",
	border: "#b25a1f",
	ink: "#5c2400",
	soft: "#8b4513"
}, a = {
	colors: {
		bg: "#e8ecf1",
		surface: "#ffffff",
		surface2: "#f3f6f9",
		ink: "#152230",
		inkSoft: "#5d6e7e",
		inkFaint: "#93a2b1",
		line: "#d6dee6",
		lineSoft: "#e6ecf1",
		accent: "#1f5fae",
		accentSoft: "#e8eef8",
		good: "#1f7a4d",
		goodSoft: "#e6f4ec",
		warn: "#b25a1f",
		warnSoft: "#fdf0e6"
	},
	radii: {
		base: "4px",
		lg: "7px",
		xl: "11px",
		full: "999px"
	},
	typography: {
		headFamily: "'IBM Plex Sans', system-ui, sans-serif",
		bodyFamily: "'IBM Plex Sans', system-ui, sans-serif",
		monoFamily: "'IBM Plex Mono', 'Courier New', monospace",
		headStyle: "normal",
		labelTransform: "uppercase",
		labelSpacing: "0.08em",
		labelSize: "10px"
	},
	motion: {
		enabled: !1,
		durationBase: "150ms",
		durationEnter: "200ms",
		durationExit: "120ms",
		easing: "ease"
	}
}, o = {
	colors: {
		bg: "#f5efe5",
		surface: "#fffdf8",
		surface2: "#f7f0e4",
		ink: "#2c2118",
		inkSoft: "#806f5d",
		inkFaint: "#b09a85",
		line: "#e7dccb",
		lineSoft: "#ede3d4",
		accent: "#d9743b",
		accentSoft: "#fdf0e6",
		good: "#4f8a5b",
		goodSoft: "#e8f4ea",
		warn: "#c2691f",
		warnSoft: "#fdf0e6"
	},
	radii: {
		base: "12px",
		lg: "18px",
		xl: "26px",
		full: "999px"
	},
	typography: {
		headFamily: "'Cormorant Garamond', Georgia, serif",
		bodyFamily: "'IBM Plex Sans', system-ui, sans-serif",
		monoFamily: "'IBM Plex Mono', 'Courier New', monospace",
		headStyle: "italic",
		labelTransform: "none",
		labelSpacing: "normal",
		labelSize: "11px"
	},
	motion: {
		enabled: !0,
		durationBase: "200ms",
		durationEnter: "280ms",
		durationExit: "160ms",
		easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
	}
}, s = {
	scientific: a,
	playful: o
}, c = {
	analyst: {
		id: "analyst",
		displayName: "Analyst",
		tagline: "Precision · Data · Clarity",
		avatarLetter: "A",
		promptSegment: "Respond precisely and concisely. Lead with data and probabilities. Avoid filler language. Structure outputs with clear labels. Use metrics and percentages where available.",
		defaultTone: "scientific"
	},
	guide: {
		id: "guide",
		displayName: "Guide",
		tagline: "Warmth · Growth · Flow",
		avatarLetter: "G",
		promptSegment: "Respond warmly and encouragingly. Use plain, natural language. Prioritise what matters most and why. Celebrate progress. Avoid jargon and excessive structure.",
		defaultTone: "playful"
	},
	collaborator: {
		id: "collaborator",
		displayName: "Co",
		tagline: "Lateral · Creative · Peer",
		avatarLetter: "C",
		promptSegment: "Respond as a peer working through the problem together. Think laterally. Surface non-obvious connections. Ask one clarifying question when useful. Match the user's register and energy.",
		defaultTone: "scientific"
	}
};
//#endregion
//#region src/skin/skins.ts
function l(e, t, n, r) {
	return {
		id: `${e}-${t}`,
		config: {
			paradigm: e,
			tone: t,
			aiPersona: t === "playful" ? "guide" : "analyst"
		},
		tokens: t === "scientific" ? a : o,
		supportedAltitudes: n,
		defaultAltitude: r
	};
}
var u = l("platform", "scientific", [
	0,
	1,
	2
], 1), d = l("platform", "playful", [
	0,
	1,
	2
], 1), f = l("companion", "scientific", [
	0,
	1,
	2
], 0), p = l("companion", "playful", [
	0,
	1,
	2
], 0), m = l("canvas", "scientific", [
	0,
	1,
	2
], 2), h = l("canvas", "playful", [
	0,
	1,
	2
], 2), g = {
	[u.id]: u,
	[d.id]: d,
	[f.id]: f,
	[p.id]: p,
	[m.id]: m,
	[h.id]: h
};
function _(e) {
	return g[`${e.paradigm}-${e.tone}`] ?? g["platform-scientific"];
}
//#endregion
//#region src/ai/objective-ai.types.ts
var v = [
	"update",
	"metric",
	"opportunity",
	"web_result",
	"urgency",
	"celebration",
	"content",
	"action_item"
], y = [
	"create_task",
	"complete_task",
	"assign_user",
	"add_note",
	"add_attachment",
	"set_objective_fields",
	"link_notes",
	"promote_to_agreement",
	"accept_agreement",
	"initiate_completion",
	"record_completion_decision"
];
//#endregion
export { v as AI_CARD_KINDS, y as AI_WRITE_TOOLS, n as App, h as CANVAS_PLAYFUL, m as CANVAS_SCIENTIFIC, p as COMPANION_PLAYFUL, f as COMPANION_SCIENTIFIC, i as GRAVITY, c as PERSONA_DEFINITIONS, d as PLATFORM_PLAYFUL, u as PLATFORM_SCIENTIFIC, o as PLAYFUL_TOKENS, a as SCIENTIFIC_TOKENS, r as SKIN_DEFAULTS, g as SKIN_REGISTRY, s as TONE_TOKENS, _ as resolveSkin };
