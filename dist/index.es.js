import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), l = (e, t) => {
	let n = {};
	for (var i in e) r(n, i, {
		get: e[i],
		enumerable: !0
	});
	return t || r(n, Symbol.toStringTag, { value: "Module" }), n;
}, u = (e, t, n, o) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(o = i(t, d)) || o.enumerable
	});
	return e;
}, d = (e, t, n) => (u(e, t, "default"), n && u(n, t, "default")), f = (e, t, i) => (i = e == null ? {} : n(o(e)), u(t || !e || !e.__esModule ? r(i, "default", {
	value: e,
	enumerable: !0
}) : i, e));
//#endregion
//#region src/App.tsx
function p() {
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
var m = {
	paradigm: "platform",
	tone: "scientific",
	aiPersona: "analyst"
}, h = {
	bg: "#fff8f0",
	border: "#b25a1f",
	ink: "#5c2400",
	soft: "#8b4513"
}, g = {
	colors: {
		bg: "#e8ecf1",
		surface: "#ffffff",
		surfaceRaised: "#ffffff",
		surface2: "#f3f6f9",
		ink: "#152230",
		inkSoft: "#5d6e7e",
		inkFaint: "#93a2b1",
		inkSubtle: "#93a2b1",
		line: "#d6dee6",
		lineSoft: "#e6ecf1",
		accent: "#1f5fae",
		accentSoft: "#e8eef8",
		accentBright: "#34d6bf",
		accentWarm: "#34acbf",
		accentCool: "#57c9b6",
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
		labelSize: "10px",
		objHeadFamily: "'Rubik', system-ui, sans-serif",
		objBodyFamily: "'Rubik', system-ui, sans-serif"
	},
	motion: {
		enabled: !1,
		durationBase: "150ms",
		durationEnter: "200ms",
		durationExit: "120ms",
		easing: "ease"
	}
}, _ = {
	colors: {
		bg: "#f5efe5",
		surface: "#fffdf8",
		surfaceRaised: "#fffdf8",
		surface2: "#f7f0e4",
		ink: "#2c2118",
		inkSoft: "#806f5d",
		inkFaint: "#b09a85",
		inkSubtle: "#b09a85",
		line: "#e7dccb",
		lineSoft: "#ede3d4",
		accent: "#d9743b",
		accentSoft: "#fdf0e6",
		accentBright: "#e8924d",
		accentWarm: "#d9743b",
		accentCool: "#c4956a",
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
		labelSize: "11px",
		objHeadFamily: "'Manrope', system-ui, sans-serif",
		objBodyFamily: "'Rubik', system-ui, sans-serif"
	},
	motion: {
		enabled: !0,
		durationBase: "200ms",
		durationEnter: "280ms",
		durationExit: "160ms",
		easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
	}
}, v = {
	scientific: g,
	playful: _
}, y = {
	primary: "hsl(264 85% 47%)",
	primaryForeground: "hsl(210 40% 98%)",
	accent: "hsl(264 85% 47%)",
	accentBright: "hsl(271 100% 58%)",
	accentWarm: "hsl(217 91% 52%)",
	accentCool: "hsl(271 96% 57%)"
}, b = {
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
function x(e, t, n, r) {
	return {
		id: `${e}-${t}`,
		config: {
			paradigm: e,
			tone: t,
			aiPersona: t === "playful" ? "guide" : "analyst"
		},
		tokens: t === "scientific" ? g : _,
		supportedAltitudes: n,
		defaultAltitude: r
	};
}
var S = x("platform", "scientific", [
	0,
	1,
	2
], 1), C = x("platform", "playful", [
	0,
	1,
	2
], 1), w = x("companion", "scientific", [
	0,
	1,
	2
], 0), T = x("companion", "playful", [
	0,
	1,
	2
], 0), E = x("canvas", "scientific", [
	0,
	1,
	2
], 2), D = x("canvas", "playful", [
	0,
	1,
	2
], 2), O = {
	[S.id]: S,
	[C.id]: C,
	[w.id]: w,
	[T.id]: T,
	[E.id]: E,
	[D.id]: D
};
function k(e) {
	return O[`${e.paradigm}-${e.tone}`] ?? O["platform-scientific"];
}
//#endregion
//#region src/ai/objective-ai.types.ts
var A = [
	"update",
	"metric",
	"opportunity",
	"web_result",
	"urgency",
	"celebration",
	"content",
	"action_item"
], j = [
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
], M = {
	sidebarWidth: "240px",
	heroHeight: "180px"
}, N = {
	1: "0.25rem",
	2: "0.5rem",
	3: "0.75rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	8: "2rem",
	10: "2.5rem"
}, P = {
	card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
	dropdown: "0 4px 16px 0 rgb(0 0 0 / 0.10)"
}, F = /* @__PURE__ */ c(((e, t) => {
	var n = {
		version: "1.0.0",
		name: "Xcamp-Nox Design System",
		description: "Color, spacing, typography, and motion tokens for Xcamp (light) and Nox (dark) themes",
		themes: {
			light: {
				name: "Xcamp",
				colors: {
					surfaces: {
						background: "hsl(0 0% 97%)",
						foreground: "hsl(220 13% 10%)",
						surface: "hsl(0 0% 100%)",
						surfaceRaised: "hsl(0 0% 100%)",
						card: "hsl(0 0% 100%)",
						cardForeground: "hsl(220 13% 10%)",
						popover: "hsl(0 0% 100%)",
						popoverForeground: "hsl(220 13% 10%)",
						border: "hsl(220 13% 91%)",
						input: "hsl(220 13% 91%)",
						ring: "hsl(168 72% 42%)"
					},
					text: {
						primary: "hsl(220 13% 10%)",
						muted: "hsl(220 9% 46%)",
						subtle: "hsl(220 6% 64%)"
					},
					brand: {
						primary: "hsl(168 72% 42%)",
						primaryForeground: "hsl(0 0% 100%)",
						accent: "hsl(168 72% 42%)",
						accentBright: "hsl(172 65% 51%)",
						accentWarm: "hsl(190 57% 47%)",
						accentCool: "hsl(170 70% 59%)"
					},
					semantic: {
						success: "hsl(142 76% 36%)",
						warning: "hsl(38 92% 50%)",
						danger: "hsl(0 84% 60%)",
						info: "hsl(213 93% 68%)"
					},
					purple: {
						base: "hsl(262 83% 58%)",
						deep: "hsl(294 60% 31%)",
						light: "hsl(269 65% 72%)",
						surface: "hsl(269 65% 95%)"
					},
					progress: {
						open: "hsl(220 13% 82%)",
						active: "hsl(38 92% 50%)",
						done: "hsl(160 84% 39%)"
					},
					gravity: {
						background: "#fff8f0",
						border: "#b25a1f",
						ink: "#5c2400",
						soft: "#8b4513"
					}
				}
			},
			dark: {
				name: "Nox",
				colors: {
					surfaces: {
						background: "hsl(222 47% 8%)",
						foreground: "hsl(210 40% 98%)",
						surface: "hsl(222 47% 11%)",
						surfaceRaised: "hsl(222 47% 13%)",
						card: "hsl(222 47% 11%)",
						cardForeground: "hsl(210 40% 98%)",
						popover: "hsl(222 47% 11%)",
						popoverForeground: "hsl(210 40% 98%)",
						border: "hsl(217 33% 18%)",
						input: "hsl(217 33% 18%)",
						ring: "hsl(168 72% 42%)"
					},
					text: {
						primary: "hsl(210 40% 98%)",
						muted: "hsl(215 20% 65%)",
						subtle: "hsl(215 15% 50%)"
					},
					brand: {
						primary: "hsl(264 85% 47%)",
						primaryForeground: "hsl(210 40% 98%)",
						accent: "hsl(264 85% 47%)",
						accentBright: "hsl(271 100% 58%)",
						accentWarm: "hsl(217 91% 52%)",
						accentCool: "hsl(271 96% 57%)"
					},
					semantic: {
						success: "hsl(142 71% 45%)",
						warning: "hsl(38 92% 50%)",
						danger: "hsl(0 72% 51%)",
						info: "hsl(199 89% 48%)"
					},
					purple: {
						base: "hsl(271 96% 57%)",
						deep: "hsl(294 60% 31%)",
						light: "hsl(269 65% 72%)",
						surface: "hsl(269 65% 95%)"
					},
					progress: {
						open: "hsl(217 33% 28%)",
						active: "hsl(264 85% 47%)",
						done: "hsl(217 91% 52%)"
					},
					gravity: {
						background: "#fff8f0",
						border: "#b25a1f",
						ink: "#5c2400",
						soft: "#8b4513"
					}
				}
			}
		},
		altitude: {
			altitude0: {
				name: "Focus (AI-first)",
				accent: "hsl(168 55% 56%)",
				accentForeground: "hsl(0 0% 100%)"
			},
			altitude1: {
				name: "Balanced (AI-assisted)",
				accent: "hsl(188 57% 47%)",
				accentForeground: "hsl(0 0% 100%)"
			},
			altitude2: {
				name: "Deep Dive (full control)",
				accent: "hsl(270 67% 72%)",
				accentForeground: "hsl(220 13% 10%)"
			}
		},
		objectiveSkins: {
			scientific: {
				name: "Scientific",
				accent: "hsl(213 70% 48%)",
				accentForeground: "hsl(0 0% 100%)",
				radius: "5px",
				fontHead: "'Rubik', system-ui, sans-serif",
				fontBody: "'Rubik', system-ui, sans-serif",
				motionEnabled: !1
			},
			playful: {
				name: "Playful",
				accent: "hsl(22 80% 58%)",
				accentForeground: "hsl(0 0% 100%)",
				radius: "14px",
				fontHead: "'Manrope', system-ui, sans-serif",
				fontBody: "'Rubik', system-ui, sans-serif",
				motionEnabled: !0
			}
		},
		spacing: {
			1: "0.25rem",
			2: "0.5rem",
			3: "0.75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			8: "2rem",
			10: "2.5rem"
		},
		radius: {
			default: "0.75rem",
			lg: "0.75rem",
			md: "0.5rem",
			sm: "0.375rem",
			pill: "999px",
			progress: "0.25rem"
		},
		shadows: {
			card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
			dropdown: "0 4px 16px 0 rgb(0 0 0 / 0.10)"
		},
		layout: {
			sidebarWidth: "240px",
			heroHeight: "180px"
		},
		motion: {
			scientific: {
				enabled: !1,
				duration: "150ms",
				enter: "200ms",
				exit: "120ms",
				easing: "ease"
			},
			playful: {
				enabled: !0,
				duration: "200ms",
				enter: "280ms",
				exit: "160ms",
				easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
			}
		}
	};
	function r(e, t = {}) {
		let { theme: r = "light", altitude: i = "altitude1", skin: a = "scientific" } = t, o = e.split("."), s = n;
		for (let e of o) if (s[e] !== void 0) s = s[e];
		else if (e === "colors" && r === "dark") {
			s = n.themes.dark.colors;
			for (let e = o.indexOf("colors") + 1; e < o.length; e++) s = s[o[e]];
			return s;
		} else if (e === "colors" && r === "light") {
			s = n.themes.light.colors;
			for (let e = o.indexOf("colors") + 1; e < o.length; e++) s = s[o[e]];
			return s;
		} else return;
		return s;
	}
	function i(e) {
		return n[e] || {};
	}
	function a(e = "light") {
		return n.themes[e]?.colors || {};
	}
	function o(e = "scientific") {
		let t = n.objectiveSkins[e], r = n.motion[e];
		return {
			...t,
			...r
		};
	}
	function s(e) {
		return `hsl(${e})`;
	}
	function c() {
		return Object.keys(n.themes);
	}
	function l() {
		return Object.keys(n.altitude);
	}
	function u() {
		return Object.keys(n.objectiveSkins);
	}
	t !== void 0 && t.exports && (t.exports = {
		TOKENS: n,
		getToken: r,
		getAllTokens: i,
		getThemeColors: a,
		getMotionConfig: o,
		hslChannelsToHsl: s,
		getAvailableThemes: c,
		getAvailableAltitudes: l,
		getAvailableSkins: u
	}), typeof window < "u" && (window.XcampTokens = {
		TOKENS: n,
		getToken: r,
		getAllTokens: i,
		getThemeColors: a,
		getMotionConfig: o,
		hslChannelsToHsl: s,
		getAvailableThemes: c,
		getAvailableAltitudes: l,
		getAvailableSkins: u
	});
})), I = {
	version: "1.0.0",
	name: "Xcamp-Nox Design System",
	description: "Color, spacing, typography, and motion tokens for Xcamp (light) and Nox (dark) themes",
	themes: {
		light: {
			name: "Xcamp",
			colors: {
				surfaces: {
					background: "hsl(0 0% 97%)",
					foreground: "hsl(220 13% 10%)",
					surface: "hsl(0 0% 100%)",
					surfaceRaised: "hsl(0 0% 100%)",
					card: "hsl(0 0% 100%)",
					cardForeground: "hsl(220 13% 10%)",
					popover: "hsl(0 0% 100%)",
					popoverForeground: "hsl(220 13% 10%)",
					border: "hsl(220 13% 91%)",
					input: "hsl(220 13% 91%)",
					ring: "hsl(168 72% 42%)"
				},
				text: {
					primary: "hsl(220 13% 10%)",
					muted: "hsl(220 9% 46%)",
					subtle: "hsl(220 6% 64%)"
				},
				brand: {
					primary: "hsl(168 72% 42%)",
					primaryForeground: "hsl(0 0% 100%)",
					accent: "hsl(168 72% 42%)",
					accentBright: "hsl(172 65% 51%)",
					accentWarm: "hsl(190 57% 47%)",
					accentCool: "hsl(170 70% 59%)"
				},
				semantic: {
					success: "hsl(142 76% 36%)",
					warning: "hsl(38 92% 50%)",
					danger: "hsl(0 84% 60%)",
					info: "hsl(213 93% 68%)"
				},
				purple: {
					base: "hsl(262 83% 58%)",
					deep: "hsl(294 60% 31%)",
					light: "hsl(269 65% 72%)",
					surface: "hsl(269 65% 95%)"
				},
				progress: {
					open: "hsl(220 13% 82%)",
					active: "hsl(38 92% 50%)",
					done: "hsl(160 84% 39%)"
				},
				gravity: {
					background: "#fff8f0",
					border: "#b25a1f",
					ink: "#5c2400",
					soft: "#8b4513"
				}
			}
		},
		dark: {
			name: "Nox",
			colors: {
				surfaces: {
					background: "hsl(222 47% 8%)",
					foreground: "hsl(210 40% 98%)",
					surface: "hsl(222 47% 11%)",
					surfaceRaised: "hsl(222 47% 13%)",
					card: "hsl(222 47% 11%)",
					cardForeground: "hsl(210 40% 98%)",
					popover: "hsl(222 47% 11%)",
					popoverForeground: "hsl(210 40% 98%)",
					border: "hsl(217 33% 18%)",
					input: "hsl(217 33% 18%)",
					ring: "hsl(168 72% 42%)"
				},
				text: {
					primary: "hsl(210 40% 98%)",
					muted: "hsl(215 20% 65%)",
					subtle: "hsl(215 15% 50%)"
				},
				brand: {
					primary: "hsl(264 85% 47%)",
					primaryForeground: "hsl(210 40% 98%)",
					accent: "hsl(264 85% 47%)",
					accentBright: "hsl(271 100% 58%)",
					accentWarm: "hsl(217 91% 52%)",
					accentCool: "hsl(271 96% 57%)"
				},
				semantic: {
					success: "hsl(142 71% 45%)",
					warning: "hsl(38 92% 50%)",
					danger: "hsl(0 72% 51%)",
					info: "hsl(199 89% 48%)"
				},
				purple: {
					base: "hsl(271 96% 57%)",
					deep: "hsl(294 60% 31%)",
					light: "hsl(269 65% 72%)",
					surface: "hsl(269 65% 95%)"
				},
				progress: {
					open: "hsl(217 33% 28%)",
					active: "hsl(264 85% 47%)",
					done: "hsl(217 91% 52%)"
				},
				gravity: {
					background: "#fff8f0",
					border: "#b25a1f",
					ink: "#5c2400",
					soft: "#8b4513"
				}
			}
		}
	},
	altitude: {
		altitude0: {
			name: "Focus (AI-first)",
			accent: "hsl(168 55% 56%)",
			accentForeground: "hsl(0 0% 100%)"
		},
		altitude1: {
			name: "Balanced (AI-assisted)",
			accent: "hsl(188 57% 47%)",
			accentForeground: "hsl(0 0% 100%)"
		},
		altitude2: {
			name: "Deep Dive (full control)",
			accent: "hsl(270 67% 72%)",
			accentForeground: "hsl(220 13% 10%)"
		}
	},
	objectiveSkins: {
		scientific: {
			name: "Scientific",
			accent: "hsl(213 70% 48%)",
			accentForeground: "hsl(0 0% 100%)",
			radius: "5px",
			fontHead: "'Rubik', system-ui, sans-serif",
			fontBody: "'Rubik', system-ui, sans-serif",
			motionEnabled: !1
		},
		playful: {
			name: "Playful",
			accent: "hsl(22 80% 58%)",
			accentForeground: "hsl(0 0% 100%)",
			radius: "14px",
			fontHead: "'Manrope', system-ui, sans-serif",
			fontBody: "'Rubik', system-ui, sans-serif",
			motionEnabled: !0
		}
	},
	spacing: {
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		8: "2rem",
		10: "2.5rem"
	},
	radius: {
		default: "0.75rem",
		lg: "0.75rem",
		md: "0.5rem",
		sm: "0.375rem",
		pill: "999px",
		progress: "0.25rem"
	},
	shadows: {
		card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
		dropdown: "0 4px 16px 0 rgb(0 0 0 / 0.10)"
	},
	layout: {
		sidebarWidth: "240px",
		heroHeight: "180px"
	},
	motion: {
		scientific: {
			enabled: !1,
			duration: "150ms",
			enter: "200ms",
			exit: "120ms",
			easing: "ease"
		},
		playful: {
			enabled: !0,
			duration: "200ms",
			enter: "280ms",
			exit: "160ms",
			easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
		}
	}
}, L = /* @__PURE__ */ l({ TOKENS_JSON: () => I });
d(L, /* @__PURE__ */ f(F(), 1)), d(/* @__PURE__ */ l({
	AI_CARD_KINDS: () => A,
	AI_WRITE_TOOLS: () => j,
	App: () => p,
	CANVAS_PLAYFUL: () => D,
	CANVAS_SCIENTIFIC: () => E,
	COMPANION_PLAYFUL: () => T,
	COMPANION_SCIENTIFIC: () => w,
	DARK_BRAND_TOKENS: () => y,
	GRAVITY: () => h,
	LAYOUT_TOKENS: () => M,
	PERSONA_DEFINITIONS: () => b,
	PLATFORM_PLAYFUL: () => C,
	PLATFORM_SCIENTIFIC: () => S,
	PLAYFUL_TOKENS: () => _,
	SCIENTIFIC_TOKENS: () => g,
	SHADOWS: () => P,
	SKIN_DEFAULTS: () => m,
	SKIN_REGISTRY: () => O,
	SPACING: () => N,
	TOKENS_JSON: () => I,
	TONE_TOKENS: () => v,
	resolveSkin: () => k
}), L);
//#endregion
export { A as AI_CARD_KINDS, j as AI_WRITE_TOOLS, p as App, D as CANVAS_PLAYFUL, E as CANVAS_SCIENTIFIC, T as COMPANION_PLAYFUL, w as COMPANION_SCIENTIFIC, y as DARK_BRAND_TOKENS, h as GRAVITY, M as LAYOUT_TOKENS, b as PERSONA_DEFINITIONS, C as PLATFORM_PLAYFUL, S as PLATFORM_SCIENTIFIC, _ as PLAYFUL_TOKENS, g as SCIENTIFIC_TOKENS, P as SHADOWS, m as SKIN_DEFAULTS, O as SKIN_REGISTRY, N as SPACING, I as TOKENS_JSON, v as TONE_TOKENS, k as resolveSkin };
