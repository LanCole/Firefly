import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "知识因分享而更有价值，欢迎转载本站内容，转载请遵守 <strong class='text-(--primary)'>署名 · 非商用 · 保持一致</strong> 的知识共享协议。感谢您的支持！",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
