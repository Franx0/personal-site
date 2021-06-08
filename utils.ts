import { parseDate } from '@/utils/index';''

declare global {
  interface String {
    capitalize(): string;
    uncamelize(): string;
    hyphenate(): string;
    titlelize(): string;
    toDate(): string;
  }
}

Object.assign(String.prototype, {
  capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  uncamelize() {
    return this.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").toLowerCase();
  },
  hyphenate() {
    return this.uncamelize().replace(/ +/g, '-').toLowerCase();
  },
  titlelize() {
    return this.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
        return match.toUpperCase();
    }).replace('-', '');
  },
  toDate() {
    return parseDate(this).toDateString();
  }
});

export {}
