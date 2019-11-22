function takepic()
	{
		$(function()
		{
			//$(document).ready(function()
			
			function camSuccess(imgData)
			{
				$("#holder").attr("src",imgData);
				//<img src:"file://storage on phone
				
			}
			
			function camError(error)
			{
				alert(error);
			}
			
			function accessCamera()
			{
				var options = {
								destinationType: Camera.DestinationType.FILE_URI,
								sourceType: Camera.PictureSourceType.CAMERA
								};
				
				navigator.camera.getPicture(camSuccess, camError, options);
			}
			
			$("canBtn").on("click", accessCamera);
						
		});
		
		document.addEventListener('deviceready', );
	}