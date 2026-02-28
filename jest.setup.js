// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Polyfill for web APIs in Node.js test environment
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill for web APIs used by Next.js API routes
if (typeof global.Request === "undefined") {
	global.Request = class Request {
		constructor(input, init) {
			this.url = typeof input === "string" ? input : input.url;
			this.method = init?.method || "GET";
			this.headers = new Headers(init?.headers);
			this.body = init?.body;
		}
	};
}

// Ensure Response.json() static method exists (Next.js might provide Response but not the static method)
if (typeof global.Response !== "undefined" && !global.Response.json) {
	global.Response.json = function (body, init) {
		return new global.Response(JSON.stringify(body), {
			...init,
			headers: {
				"Content-Type": "application/json",
				...init?.headers,
			},
		});
	};
} else if (typeof global.Response === "undefined") {
	global.Response = class Response {
		constructor(body, init) {
			this.body = body;
			this.status = init?.status || 200;
			this.statusText = init?.statusText || "OK";
			this.headers = new Headers(init?.headers);
		}

		async json() {
			return typeof this.body === "string" ? JSON.parse(this.body) : this.body;
		}

		async text() {
			return typeof this.body === "string" ? this.body : JSON.stringify(this.body);
		}

		// Static method used by NextResponse.json()
		static json(body, init) {
			return new Response(JSON.stringify(body), {
				...init,
				headers: {
					"Content-Type": "application/json",
					...init?.headers,
				},
			});
		}
	};
}

if (typeof global.Headers === "undefined") {
	global.Headers = class Headers {
		constructor(init) {
			this.map = new Map();
			if (init) {
				Object.entries(init).forEach(([key, value]) => {
					this.map.set(key.toLowerCase(), value);
				});
			}
		}

		get(name) {
			return this.map.get(name.toLowerCase());
		}

		set(name, value) {
			this.map.set(name.toLowerCase(), value);
		}
	};
}
