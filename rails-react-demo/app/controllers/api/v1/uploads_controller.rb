class Api::V1::UploadsController < ApplicationController
  def create
    @upload = Upload.new(upload_params)
    if @upload.save
      render json: {upload: @upload, url: url_for(@upload.file)}
    else
      render json: {error: @upload.errors_full_messages}, status: 422
    end
  end

  private

  def upload_params
    params.require(:upload).permit(:file)
  end
end
