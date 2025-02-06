"use strict";

{
	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_BubblyBackground;

	PLUGIN_CLASS.Type = class BubblyBackgroundType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}
