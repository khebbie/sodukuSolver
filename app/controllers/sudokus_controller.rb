class SudokusController < ApplicationController
  # GET /sudokus
  # GET /sudokus.json
  def index
    @sudokus = Sudoku.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @sudokus }
    end
  end

  # GET /sudokus/1
  # GET /sudokus/1.json
  def show
    @sudoku = Sudoku.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @sudoku }
    end
  end

  # GET /sudokus/new
  # GET /sudokus/new.json
  def new
    @sudoku = Sudoku.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @sudoku }
    end
  end

  # GET /sudokus/1/edit
  def edit
    @sudoku = Sudoku.find(params[:id])
  end

  # POST /sudokus
  # POST /sudokus.json
  def create
    @sudoku = Sudoku.new(params[:sudoku])

    respond_to do |format|
      if @sudoku.save
        format.html { redirect_to @sudoku, notice: 'Sudoku was successfully created.' }
        format.json { render json: @sudoku, status: :created, location: @sudoku }
      else
        format.html { render action: "new" }
        format.json { render json: @sudoku.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /sudokus/1
  # PUT /sudokus/1.json
  def update
    @sudoku = Sudoku.find(params[:id])

    respond_to do |format|
      if @sudoku.update_attributes(params[:sudoku])
        format.html { redirect_to @sudoku, notice: 'Sudoku was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @sudoku.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sudokus/1
  # DELETE /sudokus/1.json
  def destroy
    @sudoku = Sudoku.find(params[:id])
    @sudoku.destroy

    respond_to do |format|
      format.html { redirect_to sudokus_url }
      format.json { head :no_content }
    end
  end
end
