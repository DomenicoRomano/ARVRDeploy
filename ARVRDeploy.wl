(* ::Package:: *)

BeginPackage["ARVRDeploy`"]
VRDeploy::usage = "VRDeploy[gr] returns a cloud object to explore the given Graphics3D object in virtual reality.";
ARDeploy::usage = "ARDeploy[gr] returns a cloud object to navigate the given Graphics3D object in agumented reality.";
VRInitialize::usage = "VRInitialize[] initializes VRDeploy to use Domenico's default location.
VRInitialize[co] initializes VRDeploy to a given cloud object."
ARInitialize::usage = "ARInitialize[] initializes VRDeploy to use Domenico's default location.
ARInitialize[co] initializes ARDeploy to a given cloud object."

Begin["`Private`"]
$path = FileNameDrop[$InputFileName];
$ARInitialization = None;
$VRInitialization = None;

VRInitialize[] := 
	$VRInitialization = CloudObject["https://www.wolframcloud.com/objects/zetireticuli20160505121800zT32/VR/"]
VRInitialize[co_CloudObject] := Block[
	{$Permissions = "Public"},
	PrintTemporary["Copying files to the cloud, this might take a few minutes\[Ellipsis]"];
	CopyDirectory[
		FileNameJoin[{$path, "VR"}],
		co
	];
	$VRInitialization = co
]
ARInitialize[] := 
	$ARInitialization = CloudObject["https://www.wolframcloud.com/objects/zetireticuli20160505121800zT32/Augment/"]
ARInitialize[co_CloudObject] := Block[
	{$Permissions = "Public"},
	PrintTemporary["Copying files to the cloud, this might take a few minutes\[Ellipsis]"];
	CopyDirectory[
		FileNameJoin[{$path, "AR"}],
		co
	];
	$ARInitialization = co
]
VRDeploy::notinit = "VRDeploy is not initialized, please run VRInitialize."
VRDeploy[gr_Graphics3D] /; $VRInitialization === None := (
	Message[VRDeploy::notinit];
	VRDeploy[gr] /; False
)

VRDeploy[gr_Graphics3D] /; $VRInitialization =!= None := 
Hyperlink[
	URLBuild[
		Replace[
			First[$VRInitialization],
			{
				s_ /; StringMatchQ[s, ___ ~~ "/" ~~ EndOfString] :> s,
				s_ :> s <> "/"
			}
		],
		{"url" -> First[CopyFile[
			Export[
				FileNameJoin[{$TemporaryDirectory, "file.obj"}],
				DiscretizeGraphics[gr]
			],
			CloudObject[Permissions -> "Public"]
		]]}
	]
]

ARDeploy::notinit = "ARDeploy is not initialized, please run ARInitialize."
Options[ARDeploy] := {
	"Shader" -> "standard",
	"Opacity" -> 1,
	"Scale" -> .3,
	"Color" -> "orange",
	Permissions -> "Public"
};
ARDeploy[gr_Graphics3D, opts: OptionsPattern[]] /; $ARInitialization === None := (
	Message[ARDeploy::notinit];
	ARDeploy[gr, opts] /; False
)
ARDeploy[gr_Graphics3D, OptionsPattern[]] /; $ARInitialization =!= None := CloudExport[
	TemplateApply[
		StringTemplate[File[FileNameJoin[{$path, "AR", "ar_template.html"}]]], 
		<|
			"url" -> First[CopyFile[
				Export[
					FileNameJoin[{$TemporaryDirectory, "file.obj"}],
					DiscretizeGraphics[gr]
				],
				CloudObject[Permissions -> "Public"]
			]],
			"init" -> First[$ARInitialization],
			"shader" -> OptionValue["Shader"],
			"opacity" -> OptionValue["Opacity"],
			"scale" -> OptionValue["Scale"],
			"color" -> OptionValue["Color"]
		|>
	],
	{None, "text/html"},
	Permissions -> OptionValue[Permissions]
]

End[]
EndPackage[]






