class HomeController < ApplicationController

  def index
    @clicks = Click.all
  end

  def create
  
    @click  =  Click.create(counts: params[:count])

    render json: @click.counts
  end

end
